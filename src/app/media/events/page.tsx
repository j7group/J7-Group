// app/events/page.tsx
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getAllEventsQuery,
  getFeaturedEventsQuery,
  getUpcomingEventsQuery,
  getPastEventsQuery,
  type Event,
} from "@/lib/sanity/event";
import { urlFor } from "@/lib/sanity/image";
import { client } from "@/lib/sanity/client";
import { Hero } from "@/components/features/home/components/hero-section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "J7 Group Events - Launches & Property Exhibitions",
  description:
    "Upcoming events, property launches, and exhibitions by J7 Group. Join us to explore investment opportunities.",
  alternates: {
    canonical: "https://j7group.com.pk/media/events",
  },
  openGraph: {
    title: "J7 Group Events",
    description:
      "Upcoming events, property launches, and exhibitions by J7 Group. Join us to explore investment opportunities.",
    url: "https://j7group.com.pk/media/events",
  },
  twitter: {
    title: "J7 Group Events",
    description:
      "Upcoming events, property launches, and exhibitions by J7 Group. Join us to explore investment opportunities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
interface EventsPageProps {
  searchParams: Promise<{ filter?: string }>;
}

function EventCard({ event }: { event: Event }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://j7group.com.pk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Events",
        item: "https://j7group.com.pk/media/events",
      },
    ],
  };
  const eventDate = new Date(event.eventDate);
  // const isUpcoming = eventDate > new Date()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Link
        href={`/media/events/${event.slug.current}`}
        className="group block"
      >
        <div className="bg-white overflow-hidden transition-transform duration-300">
          <div className="relative aspect-[5/4] w-full">
            <Image
              src={urlFor(event.image).width(2400).height(1600).url()}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-gray-100 text-[#51301F] px-3 py-1 rounded-full text-sm font-semibold">
              Event
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg sm:text-2xl font-normal text-[#51301F] mb-2 transition-colors">
              {event.title}
            </h3>

            <p className="text-sm sm:text-base mb-4 line-clamp-2">
              {event.description}
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {eventDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>

              <div className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {event.location}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

function EventsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white overflow-hidden animate-pulse">
          <div className="h-64 bg-gray-300"></div>
          <div className="p-6">
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

async function EventsList({ filter }: { filter?: string }) {
  let events: Event[];

  try {
    switch (filter) {
      case "featured":
        events = await client.fetch(getFeaturedEventsQuery);
        break;
      case "upcoming":
        events = await client.fetch(getUpcomingEventsQuery);
        break;
      case "past":
        events = await client.fetch(getPastEventsQuery);
        break;
      default:
        events = await client.fetch(getAllEventsQuery);
        break;
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    events = [];
  }

  if (!events || events.length === 0) {
    return (
      <div className="text-center py-12">
        <svg
          className="w-16 h-16 text-gray-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          No events found
        </h3>
        <p className="text-gray-500">Check back later for upcoming events.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
  const { filter } = await searchParams;

  return (
    <div className="min-h-screen">
      <Hero
        backgroundSrc="teksjagesj7ohg38cdj9_1_with_bgc_sdntmc"
        backgroundType="image"
        overlay="medium"
        ariaLabel="Events Hero section"
      />
      {/* Events Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <Suspense fallback={<EventsSkeleton />}>
          <EventsList filter={filter} />
        </Suspense>
      </div>
    </div>
  );
}
