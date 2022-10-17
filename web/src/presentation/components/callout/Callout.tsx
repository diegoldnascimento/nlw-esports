import { MagnifyingGlassPlus } from "phosphor-react";
import React from "react";
import * as Dialog from '@radix-ui/react-dialog';

type CalloutProps = {
  title: string;
  subtitle: string;
};

const Callout = ({ title, subtitle }: CalloutProps) => {
  return (
    <section className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
      <div className="bg-[#2A2634] px-8 py-1 flex justify-between items-center">
        <div className="mt-6 mb-6">
          <h3 className="text-2xl text-white font-black">{title}</h3>
          <h4 className="text-zinc-400">{subtitle}</h4>
        </div>
        <Dialog.Trigger className="py-3 px-6 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />

          {"Pùblicar Anùncio"}
        </Dialog.Trigger>
      </div>
    </section>
  );
};

export { Callout };
