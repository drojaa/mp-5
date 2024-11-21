'use client';

import { useParams } from 'next/navigation';
import { redirect } from 'next/navigation'

const params = useParams();
const { alias } = params; 
console.log("params", params)

const ProductPage = () => {

  redirect(`https://www.youtube.com/@NoJumper/videos`)
};
export default ProductPage;
