const SchemaMarkup = () => {
    const schema = {
        "@context": "https://schema.org/",
        "@type": "Organization",
        "url": "https://nextjs-tech.vercel.app/",
        "legalName": "Dreamshare",
        "name": "Dreamshare",
        "description": "Share Your Holiday Dream And find the perfect partner to fulfill it.",
        "logo": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Biashara Street",
            "addressLocality": "Platinum Plaza",
            "addressRegion": "Nairobi",
            "addressCountry": "Kenya",
            "postalCode": "020"
        },
        "sameAs": [
            "https://web.facebook.com/",
            "https://www.youtube.com/",
            "https://www.instagram.com/",
            "https://www.linkedin.com/",
            "https://www.x.com/"
        ]
    };
    return (

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}

export default SchemaMarkup
