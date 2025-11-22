"use client";
import Tabs from "@/components/ui/Tabs";
import Toaster from "@/components/ui/Toaster";
import { toast } from "react-toastify";

export default function TabsController({ tabs = [], children }) {
  const handleAction = (index) => {
    const label = Array.isArray(tabs) && tabs[index] ? tabs[index] : `Pestaña ${index + 1}`;
    toast.success(`${label} guardada`, { autoClose: 2000 });
    // Aquí podrías ejecutar un fetch para guardar datos si lo deseas.
  };

  return (
    <>
      <Tabs tabs={tabs} onTabAction={handleAction}>
        {children}
      </Tabs>
      <Toaster />
    </>
  );
}
