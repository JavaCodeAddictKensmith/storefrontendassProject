import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FileText } from "lucide-react";

const data = [
    { time: "12:00 AM", today: 0, yesterday: 0 },
    { time: "5:00 AM", today: 2, yesterday: 3 },
    { time: "10:00 AM", today: 5, yesterday: 7 },
    { time: "3:00 PM", today: 3, yesterday: 5 },
    { time: "8:00 PM", today: 0, yesterday: 2 },
];

const StoreSessionsCard = () => {
    return (
        <div className="h-[240px] w-[374px] rounded-md border border-gray-300 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-2">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Store Sessions</h2>
                    <FileText className="h-5 w-5 cursor-pointer text-gray-500" />
                </div>

                {/* Store Count */}
                <p className="text-3xl font-bold">0 -</p>

                {/* Chart */}
                <ResponsiveContainer
                    width="100%"
                    height={80}
                >
                    <LineChart data={data}>
                        <XAxis
                            dataKey="time"
                            tick={{ fontSize: 12, fill: "#6B7280" }}
                        />
                        <YAxis hide />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="today"
                            stroke="#991B1B"
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="yesterday"
                            stroke="#991B1B"
                            strokeWidth={2}
                            strokeDasharray="4 4"
                        />
                    </LineChart>
                </ResponsiveContainer>

                {/* Legend */}
                <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                        <div className="h-[2px] w-4 bg-red-700"></div>
                        <span>Aug 19, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                        {/* <div className="w-4 h-[2px] bg-red-700 opacity-50 border border-red-700"></div> */}
                        <div className="w-full border-t-2 border-dashed border-red-700 opacity-50"></div>

                        <span>Aug 18, 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreSessionsCard;
