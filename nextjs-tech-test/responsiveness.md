How i have tackled the various key metrics for the website.

1. Responsive Design on Cross-Browser/Device Compatibility

From the Figma design provided we have 3 major screen sizes:

- Mobile (320px)
- Tablet (768px)
- Desktop (1200px)

The developed design is fully responsive and corresponds to the break points with an added responsive breakpoint of 600px(small tablet devices) - 768px (Large tablets) below 600px widths are treated as normal mobile devices and respond uniformly across small devices.

This are my Tailwind breakpoints:

```
    screens: {
      xs: "320px", // Extra small screens
      sm: "480px", // Small screens like mobile devices
      md: "768px", // Medium screens like tablets
      lg: "976px", // Large screens like small laptops
      xl: "1440px", // Extra large screens like desktops
      "sm-md": { min: "600px", max: "768px" }, // Custom range for 600px to 768px tablets
    },
```

Cross Browser Test

Using saucelabs i was able to test the web application on :

1. Android Platform
   pass fail
   15 Android -
   13 Android -
   12 Android -
   11 Android -
   10 Android -
   9 Android -
   8 Android -
   7.1 Android x
   7.0 Android x
   6.0 Android x
   5.1 Android GoogleAPI Emulator x

2. HTML/SEO Semantic Structure

The website leverages semantic HTML to enhance both accessibility and SEO. Semantic tags provide structure and meaning to the content, allowing screen readers and search engines to understand the webpage more effectively. Below is the semantic structure used for the homepage:

## HTML structure

```
<html lang="en">
    <head>
        <!-- Meta tags, title, and other head content -->
    </head>
    <body>
        <header aria-label="Main Navigation">
            <!-- Navigation bar or primary header content -->
        </header>

        <main>
            <!-- Hero section introducing the website -->
            <section id="hero" aria-labelledby="hero-heading">
                <h1 id="hero-heading">.....</h1>
            </section>

            <!-- Section explaining how Dreamshare works -->
            <section id="how-dreamshare-works" aria-labelledby="how-dreamshare-works-heading">
                <h2 id="how-dreamshare-works-heading">...</h2>
            </section>

            <!-- Section introducing partners or celebrities -->
            <section id="meet-a-partner" aria-labelledby="partner-heading">
                <h2 id="partner-heading">...</h2>
            </section>

            <!-- Section showcasing holiday activity ideas -->
            <section id="discover-holiday-activity-ideas" aria-labelledby="activities-heading">
                <h2 id="activities-heading">....</h2>
            </section>

            <!-- Section with a form for users to create their own holiday -->
            <section id="create-your-holiday-form" aria-labelledby="create-your-holiday-form-heading">
                <h2 id="form-heading">....</h2>
            </section>
        </main>

        <footer>
            <!-- Footer content, such as copyright, links, or social media -->
        </footer>
    </body>
</html>

```

## Heading structure

```
| Heading Level | Content                                 |
|---------------|-----------------------------------------|
| **H1**        | Share Your Holiday Dream                |
| **H2**        | How Dreamshare Works?                   |
| **H2**        | Meet a Partner for Your Best Holiday    |
| **H2**        | Discover Holiday Activity Ideas          |
| **H2**        | Create Your Holiday Activity             |
| **H3**        | Sports and Activities                    |
| **H3**        | Wellness and Health                      |
| **H3**        | Extreme Sports and Expeditions           |
| **H3**        | Safari                                   |
| **H3**        | Culture and Education                    |
| **H3**        | Enjoyment and Relaxation                 |
| **H3**        | Travelling                               |
```

Check detailed information on steps taken to ensure the page SEO is high.
