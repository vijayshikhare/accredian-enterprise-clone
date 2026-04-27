export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[200] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-slate-100 border-t-primary rounded-full animate-spin" />
        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Accredian Enterprise</p>
      </div>
    </div>
  );
}
