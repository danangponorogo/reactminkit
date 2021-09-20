import { Section1, Section2, Section3 } from './components/index';

function Home() {
  return (
    <div>
      <h1 className="h3 mb-3"><strong>Analytics</strong> Home</h1>

      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default Home;
