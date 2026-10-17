export interface BuildInfo {
  sha: string;
  date: string;
  runUrl: string | null;
}

/** Datos del build para la mini-terminal: en GitHub Actions vienen de las variables de CI. */
export function getBuildInfo(env: Record<string, string | undefined>, now: Date): BuildInfo {
  const { GITHUB_SHA, GITHUB_SERVER_URL, GITHUB_REPOSITORY, GITHUB_RUN_ID } = env;
  return {
    sha: GITHUB_SHA ? GITHUB_SHA.slice(0, 7) : "local",
    date: now.toISOString().slice(0, 10),
    runUrl:
      GITHUB_SERVER_URL && GITHUB_REPOSITORY && GITHUB_RUN_ID
        ? `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}/actions/runs/${GITHUB_RUN_ID}`
        : null,
  };
}
