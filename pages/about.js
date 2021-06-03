const About = () => {
    return ( 
        <div>
            <h1>About Page</h1>
            <p>By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.</p>
            <p>Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration.)</p>
        </div>
    );
}
 
export default About;