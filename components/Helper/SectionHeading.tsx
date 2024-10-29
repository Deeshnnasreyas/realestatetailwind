import React from 'react'
type Props = {
    heading:string
}
const SectionHeading = ({heading}:Props) => {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
        {" "}
        {heading}
          </h1>
          <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus accusantium voluptas ipsam eos illum ducimus, accusamus amet perferendis harum. Mollitia ex suscipit earum natus minus, dignissimos praesentium magni quae provident.</p>
    </div>
  );
}

export default SectionHeading
