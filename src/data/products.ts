export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  tags: string[]
  fileFormat: string
  fileSize: string
  downloads: number
  rating: number
  reviews: number
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Office Chair',
    description: 'Ergonomic office chair with adjustable height and lumbar support. Perfect for modern workspaces.',
    price: 29.99,
    image: 'https://images.pexels.com/photos/586958/pexels-photo-586958.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Chairs',
    tags: ['office', 'chair', 'ergonomic', 'modern'],
    fileFormat: 'STEP, STL, DWG',
    fileSize: '15.2 MB',
    downloads: 1247,
    rating: 4.8,
    reviews: 89
  },
  {
    id: '2',
    name: 'Mechanical Gear Assembly',
    description: 'Precision mechanical gear system with detailed specifications for industrial applications.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mechanical Parts',
    tags: ['gear', 'mechanical', 'industrial', 'precision'],
    fileFormat: 'STEP, IGES, STL',
    fileSize: '28.7 MB',
    downloads: 892,
    rating: 4.9,
    reviews: 67
  },
  {
    id: '3',
    name: 'Smartphone Case Design',
    description: 'Protective smartphone case with modern aesthetics and precise cutouts for all ports.',
    price: 19.99,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    tags: ['smartphone', 'case', 'protective', 'modern'],
    fileFormat: 'STL, OBJ, 3MF',
    fileSize: '8.4 MB',
    downloads: 2156,
    rating: 4.6,
    reviews: 143
  },
  {
    id: '4',
    name: 'Architectural Column',
    description: 'Classical architectural column with detailed ornamental features for building design.',
    price: 39.99,
    image: 'https://images.pexels.com/photos/161154/architecture-building-amsterdam-column-161154.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Architecture',
    tags: ['column', 'architecture', 'classical', 'ornamental'],
    fileFormat: 'DWG, RVT, STEP',
    fileSize: '22.1 MB',
    downloads: 634,
    rating: 4.7,
    reviews: 45
  },
  {
    id: '5',
    name: 'Drone Propeller',
    description: 'High-performance drone propeller optimized for efficiency and durability.',
    price: 24.99,
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Aerospace',
    tags: ['drone', 'propeller', 'aerospace', 'performance'],
    fileFormat: 'STEP, STL, IGES',
    fileSize: '12.8 MB',
    downloads: 1089,
    rating: 4.8,
    reviews: 78
  },
  {
    id: '6',
    name: 'Kitchen Utensil Set',
    description: 'Complete set of modern kitchen utensils with ergonomic handles and sleek design.',
    price: 34.99,
    image: 'https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Kitchen',
    tags: ['kitchen', 'utensils', 'modern', 'ergonomic'],
    fileFormat: 'STL, OBJ, STEP',
    fileSize: '18.6 MB',
    downloads: 756,
    rating: 4.5,
    reviews: 52
  },
  {
    id: '7',
    name: 'Spiral Staircase',
    description: 'Elegant spiral staircase design with detailed railings and structural components.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Stairs',
    tags: ['spiral', 'staircase', 'architecture', 'elegant'],
    fileFormat: 'DWG, RVT, STEP',
    fileSize: '45.3 MB',
    downloads: 423,
    rating: 4.9,
    reviews: 32
  },
  {
    id: '8',
    name: 'Modern Dining Table',
    description: 'Contemporary dining table with clean lines and minimalist design for 6 people.',
    price: 59.99,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tables',
    tags: ['dining', 'table', 'modern', 'minimalist'],
    fileFormat: 'STEP, STL, DWG',
    fileSize: '32.1 MB',
    downloads: 867,
    rating: 4.7,
    reviews: 54
  },
  {
    id: '9',
    name: 'Executive Office Chair',
    description: 'Premium leather executive chair with high back and adjustable armrests.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Chairs',
    tags: ['executive', 'office', 'leather', 'premium'],
    fileFormat: 'STEP, STL, DWG',
    fileSize: '28.7 MB',
    downloads: 645,
    rating: 4.8,
    reviews: 41
  },
  {
    id: '10',
    name: 'Industrial Valve',
    description: 'Heavy-duty industrial valve with precise threading and pressure specifications.',
    price: 69.99,
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mechanical Parts',
    tags: ['valve', 'industrial', 'heavy-duty', 'precision'],
    fileFormat: 'STEP, IGES, STL',
    fileSize: '38.9 MB',
    downloads: 512,
    rating: 4.6,
    reviews: 28
  },
  {
    id: '11',
    name: 'Coffee Table',
    description: 'Stylish coffee table with glass top and wooden base for living rooms.',
    price: 44.99,
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tables',
    tags: ['coffee', 'table', 'glass', 'wooden'],
    fileFormat: 'STEP, STL, DWG',
    fileSize: '25.4 MB',
    downloads: 734,
    rating: 4.5,
    reviews: 47
  },
  {
    id: '12',
    name: 'Straight Staircase',
    description: 'Classic straight staircase with wooden steps and metal railings.',
    price: 74.99,
    image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Stairs',
    tags: ['straight', 'staircase', 'wooden', 'metal'],
    fileFormat: 'DWG, RVT, STEP',
    fileSize: '41.2 MB',
    downloads: 389,
    rating: 4.7,
    reviews: 25
  },
  {
    id: '13',
    name: 'Gaming Chair',
    description: 'Ergonomic gaming chair with RGB lighting and premium cushioning.',
    price: 94.99,
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Chairs',
    tags: ['gaming', 'chair', 'rgb', 'ergonomic'],
    fileFormat: 'STEP, STL, DWG',
    fileSize: '33.6 MB',
    downloads: 923,
    rating: 4.9,
    reviews: 67
  },
  {
    id: '14',
    name: 'Conference Table',
    description: 'Large oval conference table for boardrooms and meeting spaces.',
    price: 129.99,
    image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tables',
    tags: ['conference', 'table', 'boardroom', 'oval'],
    fileFormat: 'STEP, STL, DWG',
    fileSize: '52.8 MB',
    downloads: 298,
    rating: 4.8,
    reviews: 19
  },
  {
    id: '15',
    name: 'L-Shaped Staircase',
    description: 'Space-efficient L-shaped staircase with landing platform.',
    price: 99.99,
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Stairs',
    tags: ['l-shaped', 'staircase', 'landing', 'space-efficient'],
    fileFormat: 'DWG, RVT, STEP',
    fileSize: '48.7 MB',
    downloads: 356,
    rating: 4.6,
    reviews: 22
  },
  {
    id: '16',
    name: 'Bar Stool',
    description: 'Modern bar stool with adjustable height and swivel mechanism.',
    price: 39.99,
    image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Chairs',
    tags: ['bar', 'stool', 'adjustable', 'swivel'],
    fileFormat: 'STEP, STL, DWG',
    fileSize: '19.3 MB',
    downloads: 567,
    rating: 4.4,
    reviews: 35
  },
  {
    id: '17',
    name: 'Standing Desk',
    description: 'Height-adjustable standing desk with electric motor and memory settings.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Tables',
    tags: ['standing', 'desk', 'adjustable', 'electric'],
    fileFormat: 'STEP, STL, DWG',
    fileSize: '67.2 MB',
    downloads: 445,
    rating: 4.9,
    reviews: 31
  },
  {
    id: '18',
    name: 'Floating Stairs',
    description: 'Modern floating staircase with hidden support structure.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Stairs',
    tags: ['floating', 'staircase', 'modern', 'hidden'],
    fileFormat: 'DWG, RVT, STEP',
    fileSize: '78.4 MB',
    downloads: 234,
    rating: 5.0,
    reviews: 15
  }
]

export const categories = [
  'All',
  'Chairs',
  'Tables', 
  'Stairs',
  'Mechanical Parts',
  'Electronics',
  'Architecture',
  'Aerospace',
  'Kitchen'
]