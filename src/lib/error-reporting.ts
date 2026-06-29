/**
 * Utilitário de reporte de erros do lado do cliente.
 *
 * Centraliza o tratamento de erros inesperados capturados nos
 * error boundaries do TanStack Router. Substitua o console.error
 * por uma integração com Sentry, LogRocket ou similar quando o
 * projeto evoluir para produção com monitoramento real.
 */
export function reportClientError(
  error: unknown,
  context: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  console.error("[DigitalTech] Erro capturado:", error, context);
}
