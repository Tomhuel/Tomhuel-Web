import type { Component } from "svelte";

export interface IProject {
    title: string;
    thumbnail: string;
    technologies: ITechnology[];
    description: string;
    links: ILink[];
}

export interface ITechnology {
    name: string;
    icon: Component;
}

export interface ILink {
    name: string;
    url: string;
    icon: Component;
}