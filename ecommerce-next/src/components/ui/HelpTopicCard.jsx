export default function HelpTopicCard({ title}) {
    return (
        <button className="border border-gray-300 rounded-lg p-5 text-left hover:bg-gray-50 transition">
           <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
           <p className="text-gray-600 mt-2">Get help for promble</p> 
        </button>
    );
}