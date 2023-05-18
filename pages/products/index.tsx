import Link from 'next/link'
import React from 'react'

// import Button from '@/components/page/products/button'
// import ProductItem from '@/components/page/products/productItem'

import { ProductItem, Button } from "@/components/page/products"

function Products() {
  return (
    <div>
        <h1>Products</h1>
        <Link href="/products/1">go to single product</Link>
    </div>
  )
}

export default Products