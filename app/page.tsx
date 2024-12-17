import ParticleNetwork from '@/components/particle-network/network';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-0">
        <ParticleNetwork />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="heading text-center">Andy</div>
      </div>
    </div>
  );
}
