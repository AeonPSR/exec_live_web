export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">
        Bienvenue sur le blog
      </h1>
      <p className="text-neutral-300 leading-relaxed">
        Ceci est la page d&apos;accueil. Utilisez la navigation ci-dessus pour accéder à la liste des articles (/posts) une fois créée.
      </p>
      <ul className="list-disc pl-6 text-neutral-400 text-sm space-y-1">
        <li>Architecture: App Router (dossier <code>app/</code>).</li>
        <li>Mise en page globale: définie dans <code>layout.tsx</code>.</li>
        <li>Prochaine étape: créer <code>app/posts/page.tsx</code>.</li>
      </ul>
    </section>
  );
}