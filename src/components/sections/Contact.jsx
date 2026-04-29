import React from 'react';
import Button from '../ui/Button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Contact = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section id="contact" ref={ref} className="py-24 px-6 lg:px-20 bg-nb-white">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Big bordered contact block */}
          <div className="border-2 border-nb-black p-10 md:p-16 shadow-brutal-xl bg-nb-yellow text-center">
            <p className="font-mono text-sm font-medium text-nb-black mb-4 tracking-widest uppercase">
              04. What's Next?
            </p>

            <h2 className="font-display font-black text-nb-black text-clamp-3xl md:text-clamp-4xl mb-6 leading-tight">
              Get In Touch
            </h2>

            <p className="text-nb-black/80 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              My inbox is always open. Whether you have a question, an opportunity, or just want
              to say hi — I'll definitely get back to you!
            </p>

            <Button
              href="mailto:nishadkindre@gmail.com"
              variant="outline"
              size="lg"
              className="bg-nb-black text-nb-white border-nb-black hover:bg-nb-black/80 shadow-none"
            >
              Say Hello ✉︎
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
