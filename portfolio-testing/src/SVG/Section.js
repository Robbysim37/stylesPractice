import React from 'react'
import "./svgPage.css"

export default function Section(props) {
  return (<div className={`${props.color}`}>
    <h2>This is a section!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis ante nec felis tempor 
        pretium. Quisque ut eros at augue ultricies luctus. In sit amet nibh a lacus pulvinar gravida.
         Aliquam ex enim, porttitor in quam pulvinar, rutrum vehicula sapien. Pellentesque eu nisl quis 
         ex tincidunt aliquam ac ac quam. Vivamus ultricies malesuada est sed aliquet. Vivamus justo mauris, 
         pretium in hendrerit sed, placerat eget enim. Quisque faucibus nunc nisl, vel sollicitudin turpis 
         eleifend eget. Mauris porta lacinia lectus vel mollis. Ut ut aliquam sem. Integer vel aliquet odio. 
         Mauris placerat convallis tellus, a feugiat dui pretium nec. Suspendisse suscipit gravida neque nec 
         ultrices. Duis sodales tortor vitae mauris venenatis 
        consequat. Nullam at lorem leo. Morbi maximus at odio sit amet laoreet.</p>
        </div>
  )
}
