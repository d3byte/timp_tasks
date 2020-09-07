import {Bootstrap} from "./bootstrap";
import {ClassInterface} from "./interfaces/class.interface";
import {ModuleInterface} from "./interfaces/module.interface";
import {StudentApp} from "./tasks/07.09";

const MODULES: ClassInterface<ModuleInterface>[] = [StudentApp];

const bootstrap = new Bootstrap(MODULES);

bootstrap.bootModule(StudentApp);
