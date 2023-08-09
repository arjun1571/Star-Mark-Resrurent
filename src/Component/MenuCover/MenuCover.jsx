import { Parallax } from 'react-parallax';

const MenuCover = ({img,title}) => {
  return (
    <Parallax
    blur={{ min: -50, max: 50 }}
    bgImage={img}
    bgImageAlt="the dog"
    strength={-600}
>
<div
      className="hero h-[600px] "
    
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. 
          </p>
          
        </div>
      </div>
    </div>
</Parallax>



    
  );
};

export default MenuCover;
