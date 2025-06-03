import { useState } from "react"
import { inputFormPredictionRef } from "../utils/refStore"
import { InputFormPrediction } from "./InputFormPrediction"
import { getPrediction } from "../api/getPrediction";

export const FormPrediction = () => {
    const [sleepHours, setSleepHours] = useState();
    const [physicalActifity, setPhysicActifity] = useState();
    const [caffeine, setCaffeine] = useState();
    const [alcohol, setAlcohol] = useState();
    const [stress, setStress] = useState();
    const [heartRate, setHeartRate] = useState();
    const [breathingRate, setBreathingRate] = useState();
    const [sweatingLevel, setSweatingLevel] = useState();

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        if (!sleepHours || !physicalActifity || !caffeine || !alcohol || !stress || !heartRate || !breathingRate || !sweatingLevel) {
            setError("Harap isi semua kolom terlebih dahulu")
        }

        const data = {
            sleepHours,
            physicalActifity,
            caffeine,
            alcohol,
            stress,
            heartRate,
            breathingRate,
            sweatingLevel,
        }
        
        try {
            setLoading(true)
            const response = await getPrediction(data)
            console.log(response)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form action=""
            onSubmit={handleSubmit}
            ref={inputFormPredictionRef}
            className="flex w-100 overflow-hidden items-center"
        >
            <div className="flex">
                <InputFormPrediction
                    info="Berapa lama (dalam hitungan jam) Anda tidur dalam satu hari?"
                    description="Tidur adalah faktor penting dalam menjaga kesehatan mental. Kurang tidur, terutama jika kurang dari 6 jam per hari, dapat meningkatkan risiko kecemasan, gangguan suasana hati, dan stres. Masukkan estimasi waktu tidur harian Anda secara konsisten, termasuk tidur malam dan tidur siang (jika ada)."
                    placeHolder="Contoh: 6"
                    setAnswer={setSleepHours}
                />

                <InputFormPrediction
                    info="Berapa jam Anda melakukan aktivitas fisik dalam satu minggu?"
                    description="Aktivitas fisik seperti jalan kaki, olahraga, atau pekerjaan fisik membantu mengurangi hormon stres dan meningkatkan suasana hati. Semakin sedikit aktivitas fisik, semakin besar potensi Anda mengalami gejala kecemasan. Isikan jumlah jam total aktivitas fisik Anda dalam satu minggu."
                    placeHolder="Contoh: 2"
                    setAnswer={setPhysicActifity}
                />

                <InputFormPrediction
                    info="Berapa mg kafein (misalnya dari kopi, teh, atau energi drink) yang Anda konsumsi dalam sehari?"
                    description="Kafein adalah stimulan yang bisa meningkatkan kewaspadaan, namun pada jumlah tinggi bisa menyebabkan jantung berdebar, gelisah, atau susah tidur — gejala yang berkaitan dengan kecemasan. Umumnya 1 cangkir kopi mengandung sekitar 95 mg kafein. Masukkan estimasi total konsumsi kafein harian Anda."
                    placeHolder="Contoh: 250"
                    setAnswer={setCaffeine}
                />

                <InputFormPrediction
                    info="Berapa banyak minuman beralkohol yang Anda konsumsi dalam satu minggu?"
                    description="Meskipun beberapa orang menggunakan alkohol untuk relaksasi, konsumsi rutin atau berlebihan dapat berdampak negatif pada sistem saraf pusat dan memperburuk gejala kecemasan. Masukkan jumlah minuman standar (misalnya, 1 botol bir atau 1 gelas wine) yang Anda konsumsi dalam seminggu terakhir."
                    placeHolder="Contoh: 3"
                    setAnswer={setAlcohol}
                />

                <InputFormPrediction
                    info="Dari skala 1 sampai 10, seberapa tinggi tingkat stres yang Anda rasakan saat ini?"
                    description="Stres merupakan pemicu utama kecemasan. Skala 1 berarti sangat tenang, dan 10 berarti sangat tertekan atau kewalahan. Pilih nilai yang paling menggambarkan kondisi psikologis Anda dalam beberapa hari terakhir."
                    placeHolder="Contoh: 7"
                    setAnswer={setStress}
                />

                <InputFormPrediction
                    info="Berapa detak jantung Anda saat istirahat (dalam BPM)?"
                    description="Detak jantung dalam kondisi istirahat biasanya antara 60–100 BPM. Namun, kecemasan atau serangan panik dapat meningkatkan detak jantung bahkan saat tidak beraktivitas. Jika Anda memiliki alat ukur (seperti smartwatch atau tensimeter), gunakan data tersebut untuk diisi di sini."
                    placeHolder="Contoh: 85"
                    setAnswer={setHeartRate}
                />

                <InputFormPrediction
                    info="Berapa frekuensi pernapasan Anda per menit?"
                    description="Pernapasan normal orang dewasa saat istirahat berkisar 12–20 kali per menit. Pernapasan cepat (di atas 20 kali) sering dikaitkan dengan kecemasan atau rasa panik. Anda dapat menghitungnya dengan menghitung jumlah napas dalam 30 detik lalu dikalikan 2."
                    placeHolder="Contoh: 20"
                    setAnswer={setBreathingRate}
                />

                <InputFormPrediction
                    info="Dari skala 1 sampai 5, bagaimana tingkat keringat Anda dalam kondisi normal?"
                    description="Kecemasan dapat memicu respons fisik seperti berkeringat berlebihan, terutama di telapak tangan, ketiak, atau wajah. Skala 1 berarti hampir tidak berkeringat, dan 5 berarti sangat mudah berkeringat bahkan tanpa aktivitas berat."
                    placeHolder="Contoh: 4"
                    setAnswer={setSweatingLevel}
                />

                <div className="w-100 flex flex-col items-center">
                    <p className="">If u already input all params, u can submit and get the prediction</p>
                    <button className="border py-2 px-4 rounded-2xl">Submit</button>
                    <p className="text-red-500">{error ? error : ""}</p>
                </div>
            </div>
        </form>
    )
}