import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header />

      {props.children}

      <Footer />
    </div>
  );
}

// {props.children} = the content of the page
