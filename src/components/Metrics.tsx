export default function Metrics() {
  return (
    <section className="py-20 section-divider">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

        <div>
          <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
            600+
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Global Nodes Managed
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
            10,000+
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            API Proxies
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
            99.99%
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Platform Availability
          </p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
            80%
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Operational Toil Reduction
          </p>
        </div>

      </div>
    </section>
  );
}