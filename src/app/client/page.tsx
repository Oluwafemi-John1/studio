'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Newspaper, User, Flame, Church, Calendar, Heart} from 'lucide-react';
import {useEffect, useState} from 'react';
import {Skeleton} from '@/components/ui/skeleton';

const placeholderImage = 'https://picsum.photos/200/200'; // Placeholder image URL

const trendingNews = [
  {
    title: 'Pope Francis Calls for Peace',
    content: 'Pope Francis has made a new call for peace in...',
    date: '2024-07-23',
  },
];

const infographicData = [
  {
    label: 'Active Members',
    value: '350+',
    description: 'Growing community of CYON members',
    icon: User,
  },
  {
    label: 'Events Organized',
    value: '20+',
    description: 'Engaging events held this year',
    icon: Calendar,
  },
  {
    label: 'Community Projects',
    value: '10+',
    description: 'Impacting lives through service',
    icon: Heart,
  },
  {
    label: 'Parishes Involved',
    value: '15+',
    description: 'Spreading faith across parishes',
    icon: Church,
  },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <section className="mb-8">
        <FaceOfWeek loading={loading} />
      </section>

      <section className="mb-8">
        <Infographics loading={loading} />
      </section>

      <section className="mb-8">
        <TrendingNews trendingNews={trendingNews} />
      </section>
    </div>
  );
}

function FaceOfWeek({loading}: {loading: boolean}) {
  const skeletonHeight = 250;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Face of the Week</CardTitle>
        <CardDescription>Celebrating outstanding contributions</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {loading ? (
          <Skeleton className="rounded-full w-32 h-32" />
        ) : (
          <img
            src={placeholderImage}
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover shadow-md"
          />
        )}
        <div className="space-y-1">
          {loading ? (
            <>
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-52" />
            </>
          ) : (
            <>
              <p className="text-lg font-semibold">John Doe</p>
              <p className="text-sm text-muted-foreground">
                Awarded for outstanding community service
              </p>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function Infographics({loading}: {loading: boolean}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {infographicData.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            {loading ? (
              <Skeleton className="h-6 w-24" />
            ) : (
              <CardTitle className="text-sm font-medium flex items-center">
                {item.label}
              </CardTitle>
            )}
            {loading ? (
              <Skeleton className="h-8 w-8 rounded-full" />
            ) : (
              <item.icon className="h-8 w-8 text-gray-500" />
            )}
          </CardHeader>
          <CardContent>
            {loading ? (
              <Skeleton className="h-8 w-32" />
            ) : (
              <div className="text-2xl font-bold">{item.value}</div>
            )}
            {loading ? (
              <Skeleton className="h-4 w-48" />
            ) : (
              <p className="text-sm text-muted-foreground">{item.description}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function TrendingNews({trendingNews}: {trendingNews: any[]}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Flame className="mr-2 h-4 w-4" />
          Trending News
        </CardTitle>
        <CardDescription>Top stories in the Catholic community</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {trendingNews.map((item, index) => (
          <div key={index} className="border-b pb-2 last:border-none">
            <h3 className="text-md font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.content}</p>
            <Badge className="mt-2">{item.date}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
