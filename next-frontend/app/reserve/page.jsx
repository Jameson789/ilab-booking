/*
  This page renders the equipment scheduling forms.

  Children -> ReservePage
*/

'use client'
import ReservePage from "@/components/form/MakeRequest";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const machineName = searchParams.get("machine");
  return <ReservePage machineName={machineName}/>;
}
