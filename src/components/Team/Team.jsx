const Team = () => {
  return (
    <>
      <section className='team p-4 bg-white rounded-sm about-bitcoin md:w-[60%] mx-[5%] mt-4'>
        <h2 className='mb-4 text-2xl font-semibold'>Team</h2>
        <p className='pb-2 mb-2 font-semibold text-slate-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          labore aliquid! Magnam soluta excepturi quisquam placeat ratione
          assumenda molestiae, voluptates, animi vel, nisi sunt quod fuga quam
          ex omnis quasi?
        </p>
        <Profile
          title='John Smith'
          designation='Designation here'
          src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww'
          desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci non
          natus eaque illo dolorum reiciendis. Exercitationem maiores maxime
          reprehenderit ratione? Accusantium, ad rem officiis quia voluptatibus
          dicta illo ut ea quam alias exercitationem, eos, architecto ducimus?
          Possimus nihil molestias ea!'
        />
        <Profile
          title='Elina Williams'
          designation='Designation here'
          src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww'
          desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci non
          natus eaque illo dolorum reiciendis. Exercitationem maiores maxime
          reprehenderit ratione? Accusantium, ad rem officiis quia voluptatibus
          dicta illo ut ea quam alias exercitationem, eos, architecto ducimus?
          Possimus nihil molestias ea!'
        />
        <Profile
          title='John Smith'
          designation='Designation here'
          src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww'
          desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci non
          natus eaque illo dolorum reiciendis. Exercitationem maiores maxime
          reprehenderit ratione? Accusantium, ad rem officiis quia voluptatibus
          dicta illo ut ea quam alias exercitationem, eos, architecto ducimus?
          Possimus nihil molestias ea!'
        />
      </section>
    </>
  );
};

const Profile = (props) => {
  return (
    <>
      <div className='grid grid-cols-1 gap-2 p-4 mb-4 bg-blue-100 rounded-md md:grid-cols-12 profile'>
        <div className='place-self-center md:col-span-2 profile-left'>
          <img
            src={props.src}
            alt=''
            className='object-cover w-24 h-24 rounded-sm'
          />
          <h3 className='font-semibold'>{props.title}</h3>
          <h4 className='text-xs font-semibold text-slate-400'>
            {props.designation}
          </h4>
        </div>
        <div className='md:col-span-10 profile-right'>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
};
export default Team;
