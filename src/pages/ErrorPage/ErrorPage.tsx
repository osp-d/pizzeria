import { Link } from 'react-router-dom';

export function ErrorPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-40">
      <h1>Error</h1>
      <p className="text-2xl font-bold">404 - Page was not found</p>
      <Link to="/" className="text-xl">
        Go to Home Page
      </Link>
    </div>
  );
}
