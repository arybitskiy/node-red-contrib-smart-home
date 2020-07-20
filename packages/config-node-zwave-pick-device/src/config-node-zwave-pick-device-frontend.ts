import {
  devicesDropdownOptions,
  getDeviceNameById,
} from "@sh/open-zwave-config";
import { SELECT_DEVICE } from "@sh/text-constants";

import { ConfigNodeZwavePickDeviceFrontendProps } from "./types";

RED.nodes.registerType<ConfigNodeZwavePickDeviceFrontendProps>(
  "config-node-zwave-pick-device",
  {
    category: "config",
    defaults: {
      name: { value: "" },
      node_id: { value: "", required: true },
      device: { value: "", required: true },
    },
    label: function () {
      return (
        this.name ||
        `${this.node_id ? `${this.node_id}: ` : ""}${
          this.device ? getDeviceNameById(this.device) : SELECT_DEVICE
        }`
      );
    },
    oneditprepare: function () {
      $("#node-config-input-node_id").typedInput({
        default: this.node_id,
        types: ["num"],
      });

      $("#node-config-input-device")
        .select2({ theme: "dark-adminlte", data: devicesDropdownOptions(true) })
        .val(this.device);
    },
  }
);
