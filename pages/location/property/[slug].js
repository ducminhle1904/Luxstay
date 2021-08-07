import { sanityClient } from "../../../sanity";
import groq from "groq";
import ScrollContainer from "react-indiana-drag-scroll";
import Image from "../../../components/Image/Image";
import styles from "../../../styles/SingleRooms.module.css";
import Head from "next/head";

export default function SingleProperty({
  title,
  location,
  propertyType,
  mainImage,
  images,
  pricePerNight,
  bedrooms,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollContainer className={styles.images} horizontal={true}>
        {images.map(({ _key, asset }) => (
          <Image key={_key} image={asset} />
        ))}
      </ScrollContainer>

      <div className={styles.container}></div>
    </>
  );
}

export async function getServerSideProps(pageContext) {
  const pageSlug = pageContext.query.slug;
  const query = groq`*[  slug.current == $pageSlug][0]{
    title,
    location,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    bedrooms,
    description,
  }`;
  const property = await sanityClient.fetch(query, { pageSlug });
  if (!property) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: property.title,
        location: property.location,
        propertyType: property.propertyType,
        mainImage: property.mainImage,
        images: property.images,
        pricePerNight: property.pricePerNight,
        bedrooms: property.bedrooms,
        description: property.description,
      },
    };
  }
}
