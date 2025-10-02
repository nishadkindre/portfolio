import React from 'react';
import Button from '../ui/Button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Contact = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  return (
    <section id="contact" ref={ref} className="py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-primary-400 text-base mb-5">04. What's Next?</p>

          <h2 className="text-clamp-3xl font-semibold text-text-100 mb-8">Get In Touch</h2>

          <div className="max-w-4lg mx-auto mb-12">
            <p className="text-text-400 text-lg leading-relaxed">
              Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <Button href="mailto:nishadkindre@gmail.com" size="lg" className="text-base px-8 py-4">
            Say Hello
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
