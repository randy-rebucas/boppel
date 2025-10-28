'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Upload, 
  X, 
  Plus, 
  Save, 
  Eye,
  Package,
  DollarSign,
  Tag,
  FileText,
  Image as ImageIcon
} from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    productType: 'physical',
    stockQuantity: '',
    tags: '',
    images: [] as string[],
  });

  const [isDraft, setIsDraft] = useState(false);

  const categories = [
    'Jewelry & Accessories',
    'Home & Living',
    'Art & Prints',
    'Clothing & Fashion',
    'Craft Supplies',
    'Digital Products',
    'Health & Beauty',
    'Workshops & Events',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newImages]
      }));
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Product data:', formData);
  };

  return (
    <div className="min-h-screen bg-background-primary">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link
            href="/seller/dashboard"
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-secondary rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-text-primary">Add New Product</h1>
            <p className="text-text-secondary">Create a new listing for your handcrafted items</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="card-base">
            <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
              <Package className="w-5 h-5 mr-2" />
              Basic Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-text-primary mb-2">
                  Product Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="input-base"
                  placeholder="Enter a descriptive title for your product"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-text-primary mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="input-base resize-none"
                  placeholder="Describe your product in detail. Include materials used, dimensions, care instructions, and what makes it special."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-text-primary mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="input-base"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="productType" className="block text-sm font-medium text-text-primary mb-2">
                    Product Type *
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="input-base"
                    required
                  >
                    <option value="physical">Physical Product</option>
                    <option value="digital">Digital Product</option>
                    <option value="ticket">Workshop/Event Ticket</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-text-primary mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="input-base"
                  placeholder="Enter tags separated by commas (e.g., handmade, sustainable, vintage)"
                />
                <p className="text-xs text-text-tertiary mt-1">
                  Tags help customers find your product when searching
                </p>
              </div>
            </div>
          </div>

          {/* Pricing & Inventory */}
          <div className="card-base">
            <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Pricing & Inventory
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-text-primary mb-2">
                  Price (£) *
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary">£</span>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    className="input-base pl-8"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>

              {formData.productType === 'physical' && (
                <div>
                  <label htmlFor="stockQuantity" className="block text-sm font-medium text-text-primary mb-2">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    id="stockQuantity"
                    name="stockQuantity"
                    value={formData.stockQuantity}
                    onChange={handleInputChange}
                    className="input-base"
                    placeholder="Enter quantity available"
                    min="0"
                  />
                  <p className="text-xs text-text-tertiary mt-1">
                    Leave empty for unlimited stock
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Product Images */}
          <div className="card-base">
            <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center">
              <ImageIcon className="w-5 h-5 mr-2" />
              Product Images
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Upload Images *
                </label>
                <div className="border-2 border-dashed border-border-primary rounded-lg p-8 text-center hover:border-border-accent transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-text-tertiary mx-auto mb-4" />
                    <p className="text-text-primary font-medium mb-2">Click to upload images</p>
                    <p className="text-text-secondary text-sm">
                      Upload up to 10 high-quality images (PNG, JPG, WebP)
                    </p>
                  </label>
                </div>
              </div>

              {formData.images.length > 0 && (
                <div>
                  <p className="text-sm font-medium text-text-primary mb-3">Uploaded Images</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square bg-surface-secondary rounded-lg overflow-hidden">
                          <img
                            src={image}
                            alt={`Product image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-status-error text-text-inverse rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        {index === 0 && (
                          <div className="absolute bottom-2 left-2 bg-brand-primary text-text-inverse px-2 py-1 rounded text-xs font-medium">
                            Main Image
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-border-primary">
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isDraft}
                  onChange={(e) => setIsDraft(e.target.checked)}
                  className="text-brand-primary focus:ring-brand-primary"
                />
                <span className="text-sm text-text-secondary">Save as draft</span>
              </label>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link
                href="/seller/dashboard"
                className="btn-base border border-border-primary text-text-primary hover:bg-surface-secondary"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="btn-base bg-interactive-primary text-text-inverse hover:bg-interactive-primary-hover"
              >
                <Save className="w-4 h-4 mr-2" />
                {isDraft ? 'Save Draft' : 'Publish Product'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
