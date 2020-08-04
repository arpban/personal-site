import React from "react"
import Img from "gatsby-image"
import { ChevronLeft, ChevronRight } from "react-feather"

class WorkCard extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeImageIndex: 0
    }

    this.nextImage = this.nextImage.bind(this)
    this.previousImage = this.previousImage.bind(this)
  }
  
  total_images = this.props.images.edges.length

  nextImage(){
    if(this.state.activeImageIndex < this.total_images-1){
      this.setState({
        activeImageIndex: this.state.activeImageIndex + 1
      })
    }
  }

  previousImage(){
    if(this.state.activeImageIndex > 0){
      this.setState({
        activeImageIndex: this.state.activeImageIndex - 1
      })
    }
  }

  render() {
    return (
      <div className="work-card">
        <div className="work-card__wrapper">

          <div className="work-card__carousel">

            <div className="work-card__images">
              {
                this.props.images.edges.map((image, index) => (
                  <div 
                    key={index} 
                    className={
                      (this.state.activeImageIndex === index) ? 
                      "work-card__image work-card__image--visible" :
                      "work-card__image"
                    }
                  >
                    <Img sizes={{ ...image.node.childImageSharp.fluid, aspectRatio: 12/11 }} />
                  </div>
                ))
              }
            </div>

            <div className="work-card__carousel__controls">
              <button className={this.state.activeImageIndex === 0 ? "invisible" : ""} onClick={this.previousImage}>
                <ChevronLeft />
              </button>
              <button className={this.state.activeImageIndex === this.total_images-1 ? "invisible" : ""} onClick={this.nextImage}>
                <ChevronRight />
              </button>
            </div>

          </div>

          <div className="work-card__details">
            
            <h2 className="work-card__title">{this.props.title}</h2>
            
            <p className="work-card__description">{this.props.description}</p>

            {
              this.props.role === null ? "" : (
                <div className="work-card__role">
                  <strong>Role:</strong> {this.props.role}
                </div>
              )
            }

            {
              this.props.duration === null ? "" : (
                <div className="work-card__duration">
                  <strong>Duration:</strong> {this.props.duration}
                </div>
              )
            }
            
            <div className="work-card__links">
              {/* {
                this.props.postLink == null ? "" : (
                  <Link to={this.props.postLink}>Learn More</Link> 
                )
              }
              {
                (this.props.postLink != null && this.props.projectUrl != null) ? " | " : ""
              }
              {
                this.props.projectUrl == null ? "" : (
                  <a href={this.props.projectUrl} target="_blank" rel="noopener noreferrer">Project Url</a>
                )
              }  */}
              {this.props.children}
            </div>
          
          </div>

        </div>
      </div>
    )
  }
}

// const WorkCard = ({ images, title, description, role, duration, postLink, projectUrl }) => {
//   return (
    
//     <div className="work-card">
//       <div className="work-card__wrapper">

//         <div className="work-card__images">
//           {
//             images.edges.map((image, index) => (
//               <div key={index} className="work-card__image">
//                 <Img sizes={{ ...image.node.childImageSharp.fluid, aspectRatio: 12/11 }} />
//               </div>
//             ))
//           }
//         </div>

//         <div className="work-card__details">
          
//           <h2 className="work-card__title">{title}</h2>
          
//           <p className="work-card__description">{description}</p>

//           {
//             role == null ? "" : (
//               <div className="work-card__role">
//                 <strong>Role:</strong> {role}
//               </div>
//             )
//           }

//           {
//             duration == null ? "" : (
//               <div className="work-card__duration">
//                 <strong>Duration:</strong> {duration}
//               </div>
//             )
//           }
          
//           <div className="work-card__links">
//             {
//               postLink == null ? "" : (
//                 <Link to={postLink}>Learn More</Link> 
//               )
//             }
//             {
//               (postLink != null && projectUrl != null) ? " | " : ""
//             }
//             {
//               projectUrl == null ? "" : (
//                 <a href={projectUrl} target="_blank" rel="noopener noreferrer">Project Url</a>
//               )
//             } 
//           </div>
        
//         </div>

//       </div>
//     </div>

//   )
// }

export default WorkCard