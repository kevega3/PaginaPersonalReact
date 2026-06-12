import PageContent from "@/components/PageContent/PageContent";
import { getPortfolioData } from "@/data/db-client";
import type { PortfolioData } from "@/types";

export const revalidate = 3600;

export default async function Home() {
  let data: PortfolioData;
  let hasError = false;

  try {
    data = await getPortfolioData();
  } catch (error) {
    console.error('Error al cargar datos del portafolio:', error);
    data = { services: [], projects: [], certificates: [] };
    hasError = true;
  }

  return <PageContent data={data} hasError={hasError} />;
}
