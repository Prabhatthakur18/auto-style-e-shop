
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, FolderTree, TrendingUp, Users } from 'lucide-react';
import { getProducts, getCategories } from '@/services/adminApi';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    outOfStock: 0,
    lowStock: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          getProducts(),
          getCategories(),
        ]);

        if (productsResponse.success && productsResponse.data) {
          const products = productsResponse.data;
          const outOfStock = products.filter(p => p.stock === 0).length;
          const lowStock = products.filter(p => p.stock > 0 && p.stock <= 10).length;
          
          setStats(prev => ({
            ...prev,
            totalProducts: products.length,
            outOfStock,
            lowStock,
          }));
        }

        if (categoriesResponse.success && categoriesResponse.data) {
          setStats(prev => ({
            ...prev,
            totalCategories: categoriesResponse.data.length,
          }));
        }
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: Package,
      color: 'text-blue-600',
    },
    {
      title: 'Categories',
      value: stats.totalCategories,
      icon: FolderTree,
      color: 'text-green-600',
    },
    {
      title: 'Out of Stock',
      value: stats.outOfStock,
      icon: TrendingUp,
      color: 'text-red-600',
    },
    {
      title: 'Low Stock',
      value: stats.lowStock,
      icon: Users,
      color: 'text-yellow-600',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of your e-commerce admin panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">
              No recent activity to display. Start managing your products and categories!
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm text-gray-600">
              • Add new products<br />
              • Manage categories<br />
              • Upload bulk data<br />
              • Update stock levels
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
