import React from 'react'
import createReactClass from 'create-react-class';
import { Container, Row, Col } from 'reactstrap';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import Carousel from 'nuka-carousel'
import sliderImage1 from './assets/slide1.jpg'
import sliderImage2 from './assets/slide2.jpg'
import sliderImage3 from './assets/slide3.jpg'
import sliderImage4 from './assets/slide4.jpg'
import Link from 'gatsby-link'

const decoratorStyles = {
  padding: '0.5rem',
  fontWeight: 'bold',
  color: 'white',
  background: 'rgba(0,0,0,0.35)'
}
var Decorators = [{
  component: createReactClass({
    render() {
      return (
        <button
          onClick={this.props.previousSlide}>
          &lt;
        </button>
      )
    }
  }),
  position: 'CenterLeft',
  style: decoratorStyles
},
{
  component: createReactClass({
    render() {
      return (
        <button
          onClick={this.props.nextSlide}>
          &gt;
        </button>
      )
    }
  }),
  position: 'CenterRight',
  style: decoratorStyles
}];

const Performances = ({data}) => {
  const events = data.events.edges.map((event) =>
    <li key={event.node.id}>{event.node.date} {event.node.title}</li> 
  );
  return events.length > 0 ? (
    <section className="box">
      <h2>Performances</h2>
      <ul>{events}</ul>
    </section>
  ) : null
}

const Gallery = ({data}) => {
  const images = data.gallery.media.map((image) =>
    <img key={image.id} src={image.sizes.src} srcSet={image.sizes.srcSet} sizes={image.sizes.sizes} />    
  );
  return images.length > 0 ? (
    <section className="media-bottom">
      <Carousel decorators={Decorators} wrapAround>
        {images}
      </Carousel>
    </section>  
  ) : null
}

const IndexPage = ({ data }) => {
  
  return (
  <div>
    <section className="media-top">
      <h2>See &amp; Listen</h2>
      <iframe className="spotifyPlayer" src="https://open.spotify.com/embed/track/66v1YektlAqdTQc3QN0LGK"></iframe>
      <iframe className="youtubePlayer" src="https://www.youtube.com/embed/azZrNoPtRpQ"></iframe>
    </section>
    <Gallery data={data} />
    <section className="box">
      <div>
        <h2>Shop</h2>
        <Link to="https://www.redbubble.com/people/deniart" className="btn btn-outline-secondary">Online Store</Link>
      </div>
    </section>
    <Performances data={data} />
    <section className="box">
      <div>
        <h2>Booking &amp; Enquiries</h2>
        <Link to="mailto:band@bandname.com" className="btn-outline-secondary">band@bandname.com</Link>
      </div>
    </section>
</div>
)
}

export default IndexPage


export const pageQuery = graphql`
query pageQuery {
  events: allContentfulEvent {
    edges {
      node {
        id
        title
        date
      }
    }
  }
  gallery: contentfulGallery(title: { eq: "Frontpage Gallery"}) {
    id
    title
    media {
      id
      sizes {
        src
        srcSet
        sizes
      }
    }
  }
}
`