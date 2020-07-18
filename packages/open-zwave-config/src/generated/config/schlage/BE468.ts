import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            genre: "config",
            index: "3",
            label: "Beeper",
            min: "0",
            max: "255",
            size: "1",
            value: "255",
            Help: "\n\t\t\t\tEnable or disable the beeper.\n\t\t\t",
            Item: [
              { label: "Disable Beeper", value: "0" },
              { label: "Enable Beeper", value: "255" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "4",
            label: "Vacation Mode",
            min: "0",
            max: "255",
            size: "1",
            value: "0",
            Help:
              "\n\t\t\t\tPrevents all user codes from unlocking the deadbolt.\n\t\t\t\tEnable for extra security while you are away for\n\t\t\t\tan extended period of time.\n\t\t\t",
            Item: [
              { label: "Disable Vacation Mode", value: "0" },
              { label: "Enable Vacation Mode", value: "255" },
            ],
          },
          {
            type: "list",
            genre: "config",
            index: "5",
            label: "Lock & Leave",
            units: "",
            min: "0",
            max: "255",
            size: "1",
            value: "255",
            Help:
              "\n\t\t\t\tWhen enabled: Press the Outside Schlage Button to lock the\n\t\t\t\tdeadbolt. (Default setting).\n\t\t\t\tWhen disabled: Press the Outside Schlage Button and then enter\n\t\t\t\ta user code to lock the deadbolt.\n\t\t\t",
            Item: [
              { label: "Disable Lock & Leave", value: "0" },
              { label: "Enable Lock & Leave", value: "255" },
            ],
          },
          {
            type: "int",
            genre: "config",
            index: "12",
            read_only: "true",
            label: "Electronic transition count",
          },
          {
            type: "int",
            genre: "config",
            index: "13",
            read_only: "true",
            label: "Mechanical transition count",
          },
          {
            type: "int",
            genre: "config",
            index: "14",
            read_only: "true",
            label: "Electronic failed count",
            Help:
              "\n\t\t\t\tEach failed electronic attempt increments this count by one.\n\t\t\t",
          },
          {
            type: "list",
            genre: "config",
            index: "15",
            label: "Auto lock",
            size: "1",
            value: "0",
            Help:
              "\n\t\t\t\tWhen enabled, the lock will automatically relock 30 seconds\n\t\t\t\tafter unlocking. (Disabled by default.)\n\t\t\t",
            Item: [
              { label: "Disable auto lock", value: "0" },
              { label: "Enable auto lock", value: "255" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            index: "16",
            label: "User code pin length",
            min: "4",
            max: "8",
            value: "4",
            Help:
              "\n\t\t\t\tUser Code PIN length, a value between 4 and 8. \n\t\t\t\tIMPORTANT: All user codes must be the same length.\n\t\t\t",
          },
          {
            type: "int",
            genre: "config",
            index: "17",
            label: "Electrical High Preload Transition Count",
            read_only: "true",
            Help:
              "\n\t\t\t\tA subset of Electronic transition count, the number of transitions\n\t\t\t\twith high preload.\n\t\t\t",
          },
          {
            type: "byte",
            genre: "config",
            index: "18",
            label: "Bootloader Version",
            read_only: "true",
            Help: "The version of the bootloader",
          },
        ],
      },
      {
        id: "113",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "0",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "98",
                RequestFlags: "0",
                Index: "1",
                Instance: "1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
