"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Christening() {
  const router = useRouter();

  return (
    <main className="bg-gradient-to-r from-teal-200 to-lime-200 h-screen flex items-center justify-center flex-col">
      <Card className="w-80 mx-10">
        <CardHeader className="flex gap-3">
          <Image
            alt="wedding"
            height={40}
            radius="sm"
            src="/img/bodas/wedding.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Invitaciones</p>
            <p className="text-small text-default-500">Bodas</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Listbox aria-label="Actions">
            <ListboxItem key="diana-ernesto" onClick={() => router.push("diana-ernesto")}>
              ⭐ Diana & Ernesto
            </ListboxItem>
            <ListboxItem key="isabel-alan" onClick={() => router.push("isabel-alan")}>
              ⭐ Isabel & Alan
            </ListboxItem>
          </Listbox>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link href="/" color="foreground" size="sm">
            Regresar
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
