import { fetchReliefsPages } from '@/app/lib/data';
import { CreateRelief } from '@/app/ui/campaign/reliefs-buttons';
import ReliefsTable from '@/app/ui/campaign/reliefs-table';
import Pagination from '@/app/ui/campaigns/pagination';
import ReliefStocksTable from '@/app/ui/relief/relief-stocks-table';
import { TableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

async function Page({
  params,
  searchParams,
}: {
  params: { reliefId: string };
  searchParams?: {
    page?: string;
  };
}) {
  const reliefId = params.reliefId;

  return (
    <div>
      <Suspense key={reliefId} fallback={<TableSkeleton />}>
        <ReliefStocksTable reliefId={reliefId} />
      </Suspense>
    </div>
  );
}

export default Page;
