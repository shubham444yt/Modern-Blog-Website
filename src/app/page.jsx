"use client"

import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import TopBlogs from '../components/TopBlogs';
import Categories from '../components/Categories';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import CategoryButton from '@/components/CategoryButton';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Animated Blog | Next.js</title>
        <meta name="description" content="A beautiful animated blog website built with Next.js" />
      </Head>
      
      <Hero />
      <TopBlogs />
      
      <Categories />
     
      <Gallery />
      <CategoryButton/>
   
      <Contact />
    </Layout>
    
  );
};

export default Home;