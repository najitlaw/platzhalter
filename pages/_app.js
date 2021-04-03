import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full bg-gray-900">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
