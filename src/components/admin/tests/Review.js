import { ClockIcon, ChevronRightIcon } from "@heroicons/react/outline"

export default function Review({ review }) {
  return (
    <li key={review.id}>
      <section className="block bg-gray-50 dark:bg-white">
        <div className="px-4 py-4 flex items-center sm:px-6">
          <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
            <div className="truncate">
              <div className="flex">
                <p className="text-sm font-medium text-indigo-600 truncate">{review.id}</p>
              </div>
              <div className="mt-2 flex">
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="truncate">
                    {new Intl.DateTimeFormat("default", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                      hour: "numeric",
                      minute: "numeric"
                    }).format(review.start)}
                  </span>
                  &nbsp;-&nbsp;
                  <span className="truncate">
                    {new Intl.DateTimeFormat("default", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                      hour: "numeric",
                      minute: "numeric"
                    }).format(review.end)}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
              <div className="flex overflow-hidden -space-x-1">
                <span className={`text-sm ${review.status === "passed" ? "text-indigo-600" : "text-gray-300"}`}>
                  {review.status}
                </span>
              </div>
            </div>
          </div>
          <div className="ml-5 flex-shrink-0 cursor-pointer">
            <ChevronRightIcon className="h-5 w-5 text-gray-400 pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </section>
    </li>
  )
}
