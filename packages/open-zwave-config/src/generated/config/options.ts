import type { document } from "../github.com/OpenZWave/options";

const config: Partial<document> = {
  Options: {
    Option: [
      { name: "logging", value: "true" },
      { name: "Associate", value: "true" },
      { name: "PerformReturnRoutes", value: "false" },
      { name: "NotifyTransactions", value: "false" },
      { name: "DriverMaxAttempts", value: "5" },
      { name: "SaveConfiguration", value: "true" },
      { name: "RefreshAllUserCodes", value: "false" },
      { name: "ThreadTerminateTimeout", value: "5000" },
    ],
  },
};

export default config;
