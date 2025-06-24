import type { ConfigFileOptions } from "@odata2ts/odata2ts";
import dotenv from 'dotenv'

dotenv.config();

const sourceUrl = process.env.VITE_ODATA_API_BASE_URL ? process.env.VITE_ODATA_API_BASE_URL : `${process.env.VITE_API_BASE_URL}/odata`

const config: ConfigFileOptions = {
    services: {
        Example: {
            sourceUrl,
            source: "src/odata/Example/metadata.xml",
            output: "src/odata/Example",
        }
    }
}

export default config;