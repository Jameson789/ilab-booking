'use client'
import ReservePage from "@/components/form/ReservePage";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const machineName = searchParams.get("machine");
  return <ReservePage machineName={machineName}/>;
}
