import { useState } from "react";
import CanvasPreview from "../components/canvasPreview";

const Index = () => {
  const [options, setOptions] = useState({
    w: 300,
    h: 300,
    c: "d8d8d8",
    ct: "000000",
    t: "",
  });

  const getUrl = () => {
    const query = Object.keys(options)
      .map((key) => {
        if (options[key]) {
          return key + "=" + options[key];
        }
      })
      .join("&");

    return `https://platzhalter.vercel.app/api/?${query}`;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div className="px-4 py-5 sm:px-6 flex justify-between space-x-2">
          <div>
            <label
              htmlFor="width"
              className="block text-sm font-medium text-gray-700"
            >
              Width
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="Width"
                id="width"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border rounded-md"
                placeholder="300"
                max={400}
                value={options.w}
                onChange={({ target }) =>
                  setOptions({ ...options, w: target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700"
            >
              Height
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="Height"
                id="height"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border rounded-md"
                placeholder="300"
                value={options.h}
                onChange={({ target }) =>
                  setOptions({ ...options, h: target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="company_website"
              className="block text-sm font-medium text-gray-700"
            >
              Background
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                #
              </span>
              <input
                type="text"
                name="company_website"
                id="company_website"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 border"
                placeholder="000000"
                value={options.c}
                onChange={({ target }) =>
                  setOptions({ ...options, c: target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="company_website"
              className="block text-sm font-medium text-gray-700"
            >
              Text
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                #
              </span>
              <input
                type="text"
                name="company_website"
                id="company_website"
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 border"
                placeholder="ffffff"
                value={options.ct}
                onChange={({ target }) =>
                  setOptions({ ...options, ct: target.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="Content"
                id="content"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border rounded-md"
                placeholder="optional"
                value={options.t}
                onChange={({ target }) =>
                  setOptions({ ...options, t: target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6 flex justify-center">
          <CanvasPreview options={options} />
        </div>
        <div className="px-4 py-4 sm:px-6 text-gray-900 underline">
          <a href={getUrl()} target="_blank">
            {getUrl()}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
