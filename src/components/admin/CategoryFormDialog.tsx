
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { createCategory, uploadImage } from '@/services/adminApi';

interface Category {
  id: string;
  name: string;
  description?: string;
  parent_id?: string;
  image?: string;
}

interface CategoryFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
  categories: Category[];
  onSuccess: () => void;
}

const CategoryFormDialog = ({ isOpen, onClose, category, categories, onSuccess }: CategoryFormDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    parent_id: '',
    image: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      if (category) {
        setFormData({
          name: category.name,
          description: category.description || '',
          parent_id: category.parent_id || '',
          image: category.image || '',
        });
      } else {
        setFormData({
          name: '',
          description: '',
          parent_id: '',
          image: '',
        });
      }
    }
  }, [isOpen, category]);

  const handleImageUpload = async () => {
    if (!imageFile) return formData.image;

    const response = await uploadImage(imageFile);
    return response.success ? response.data?.url : formData.image;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let imageUrl = formData.image;
      if (imageFile) {
        imageUrl = await handleImageUpload();
      }

      const categoryData = {
        ...formData,
        image: imageUrl,
        parent_id: formData.parent_id || undefined,
      };

      const response = await createCategory(categoryData);

      if (response.success) {
        toast({
          title: "Success",
          description: `Category ${category ? 'updated' : 'created'} successfully`,
        });
        onSuccess();
        onClose();
      } else {
        toast({
          title: "Error",
          description: response.message || `Failed to ${category ? 'update' : 'create'} category`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error saving category:', error);
      toast({
        title: "Error",
        description: "An error occurred while saving the category",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{category ? 'Edit Category' : 'Add New Category'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Category Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="parent">Parent Category</Label>
            <Select value={formData.parent_id} onValueChange={(value) => setFormData({ ...formData, parent_id: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select parent category (optional)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">None</SelectItem>
                {categories
                  .filter(cat => cat.id !== category?.id)
                  .map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="image">Category Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />
            {formData.image && (
              <div className="mt-2 text-sm text-gray-600">
                Current image: {formData.image.split('/').pop()}
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : category ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryFormDialog;
