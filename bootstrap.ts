import {ClassInterface} from "./interfaces/class.interface";
import {ModuleInterface} from "./interfaces/module.interface";

export class Bootstrap {
    constructor(private modules: ClassInterface<ModuleInterface>[]) {}

    public bootModule(target: ClassInterface<ModuleInterface>): void {
        const moduleImpl = this.modules
            .find((moduleItem: ClassInterface<ModuleInterface>) => moduleItem === target);

        if (moduleImpl) {
            (new moduleImpl).init();
        }
    }
}
