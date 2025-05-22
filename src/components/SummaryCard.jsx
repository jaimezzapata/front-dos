export default function SummaryCard({ color = "bg-blue-500" }) {
    return (
        <div className={`${color} text-white rounded-lg p-4 shadow`}>
            <div className="text-2xl font-bold">9.823</div>
            <div className="text-sm">Members online</div>
            <div className="mt-2 opacity-80 text-xs">[ mini gráfico aquí ]</div>
        </div>
    );
}