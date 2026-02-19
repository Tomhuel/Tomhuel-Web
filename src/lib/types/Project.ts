import type { Component } from "svelte";

export interface IProject {
    title: string;
    type: 'Side project' | 'Work project' | 'Fun project';
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