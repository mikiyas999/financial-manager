"use client";

import React from "react";

import { Loader, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { columns } from "./columns";
import { DataTable } from "@/components/data-table";

import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction";
import { useGetTransactions } from "@/features/transactions/api/use-get-transactions";
import { useBulkDeletetransaction } from "@/features/transactions/api/use-bulk-delete-transactions";

const TransactionPage = () => {
  const { onOpen } = useNewTransaction();

  const transactionsQuery = useGetTransactions();
  const deleteTransaction = useBulkDeletetransaction();
  const transaction = transactionsQuery.data || [];
  const isDisable = transactionsQuery.isLoading || deleteTransaction.isPending;

  if (transactionsQuery.isLoading) {
    <div className="mx-auto -mt-6 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm ">
        <CardHeader>
          <Skeleton className="h-8 w-48" />
        </CardHeader>
        <CardContent>
          <div className="flex h-[500px] w-full items-center justify-center">
            <Loader className="size-6 animate-spin text-slate-300" />
          </div>
        </CardContent>
      </Card>
    </div>;
  }
  return (
    <div className="mx-auto -mt-6 w-full max-w-screen-2xl pb-10">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="line-clamp-1 text-xl">
            Transaction History
          </CardTitle>
          <Button size="sm" onClick={onOpen}>
            <Plus className="mr-2 size-4" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={transaction}
            filterKey="account"
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteTransaction.mutate({ ids });
            }}
            disabled={isDisable}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionPage;
